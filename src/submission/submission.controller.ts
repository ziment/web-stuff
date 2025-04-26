import { Controller } from "@nestjs/common";
import { ApiExcludeController } from "@nestjs/swagger";

@ApiExcludeController()
@Controller("submissions")
export class SubmissionController {
  constructor() {}
}
