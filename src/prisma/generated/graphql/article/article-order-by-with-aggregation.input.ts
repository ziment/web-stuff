import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleCountOrderByAggregateInput } from './article-count-order-by-aggregate.input';
import { ArticleAvgOrderByAggregateInput } from './article-avg-order-by-aggregate.input';
import { ArticleMaxOrderByAggregateInput } from './article-max-order-by-aggregate.input';
import { ArticleMinOrderByAggregateInput } from './article-min-order-by-aggregate.input';
import { ArticleSumOrderByAggregateInput } from './article-sum-order-by-aggregate.input';

@InputType()
export class ArticleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ArticleCountOrderByAggregateInput, {nullable:true})
    _count?: ArticleCountOrderByAggregateInput;

    @Field(() => ArticleAvgOrderByAggregateInput, {nullable:true})
    _avg?: ArticleAvgOrderByAggregateInput;

    @Field(() => ArticleMaxOrderByAggregateInput, {nullable:true})
    _max?: ArticleMaxOrderByAggregateInput;

    @Field(() => ArticleMinOrderByAggregateInput, {nullable:true})
    _min?: ArticleMinOrderByAggregateInput;

    @Field(() => ArticleSumOrderByAggregateInput, {nullable:true})
    _sum?: ArticleSumOrderByAggregateInput;
}
