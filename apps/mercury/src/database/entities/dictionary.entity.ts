// nest
import { ObjectType, Field, Int } from '@nestjs/graphql';
// third
import { Column, Entity, OneToMany } from 'typeorm';
// project
import { DictionaryEnum } from '.';
import { Foundation } from 'assets/entities/foundation.entity';

@Entity()
@ObjectType()
export class Dictionary extends Foundation {
  @Field(() => String, {
    description: 'code',
  })
  @Column({
    unique: true,
  })
  code: string;

  @Field(() => String, {
    description: '描述',
  })
  @Column()
  description: string;

  @Field(() => Int, {
    description: '描述',
  })
  @Column()
  sortBy: number;

  @OneToMany(() => DictionaryEnum, (dictionaryEnum) => dictionaryEnum.parent)
  children: DictionaryEnum[];
}
