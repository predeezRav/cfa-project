
import { Category } from "src/entity/Category";
import { Resolver, Mutation, Arg, Query, InputType, Field } from "type-graphql" 

@InputType()
class CategoryInput{
    @Field()
    name: string

    @Field()
    description: string
    }

@Resolver()
export class CategoryResolver {
    @Mutation( () => Boolean)
   async createCategory(
        @Arg('name') name: string,
        @Arg('description') description: string
    
    ) {
       await Category.insert({name, description});
        return true;
    }

    @Query(() => [Category])
    categories() {
        return Category.find();
    }
}