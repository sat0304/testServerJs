import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "src/users/users.model";

interface textCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName: 'text'})
export class Text extends Model<Text, textCreationAttrs> {
    @Column({type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true
            })
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER,
             allowNull: false})
    userId: number;

    @Column({type: DataType.STRING,
        allowNull: false
        })
    content: string;

    @Column({type: DataType.STRING})
    image: string;

    @BelongsTo(()=> User)
    author: User;

    @Column({type: DataType.STRING,
        unique: true,
        allowNull: false
        })
    title: string;
}