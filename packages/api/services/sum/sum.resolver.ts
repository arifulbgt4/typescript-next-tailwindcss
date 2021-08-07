import { Resolver, Query, Mutation, Arg,Int} from 'type-graphql';

@Resolver()
export class SumResolver {
  private x: number = 0
  private y: number = 0

  @Query(() => Int, { description: 'Get the result' })
  async getResult(): Promise<number> {
    return await this.x + this.y;
  }
  @Mutation(() => Int)
  async sum(
    @Arg('x', (type) => Int, { defaultValue: 0 }) x: number,
    @Arg('y', (type) => Int, { defaultValue: 0 }) y: number,
  ): Promise<number> {

    this.x = x;
    this.y = y;

    return x + y;
  }
}
