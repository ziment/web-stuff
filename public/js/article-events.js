class ArticleEvents {
  constructor() {
    this.eventSource = null;
    this.init();

    window.addEventListener('beforeunload', () => this.cleanup());
  }

  init() {
    this.cleanup();
    
    this.eventSource = new EventSource('/articles/events/stream');
    
    this.eventSource.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      this.handleEvent(data);
    });

    this.eventSource.addEventListener('error', (error) => {
      if (this.eventSource.readyState === EventSource.CONNECTING) {
        console.error('EventSource failed:', error);
        this.cleanup();
        // Try to reconnect 
        setTimeout(() => this.init(), 5000);
      }
    });
  }

  cleanup() {
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
  }

  handleEvent(event) {
    const { type, data } = event;
    let message = '';
    let notifType = '';

    switch (type) {
      case 'created':
        message = `New article created: ${data.title}`;
        notifType = 'success';
        break;
      case 'updated':
        message = `Article updated: ${data.title}`;
        notifType = 'info';
        break;
      case 'deleted':
        message = `Article deleted: ${data.title}`;
        notifType = 'warning';
        break;
    }

    if (message) {
      this.showNotification(message, notifType);
    }
  }

  showNotification(message, type) {
    toastr.options = {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      timeOut: 5000
    };
    
    toastr[type](message);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ArticleEvents();
}); 