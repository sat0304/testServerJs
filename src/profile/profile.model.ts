import { BelongsTo, BelongsToAssociation, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "src/users/users.model";

interface profileCreationAttrs {
    login: string;
    firstName: string;
    secondName: string;
    phonenumber: string;
    userId: number;
}

@Table({tableName: 'profile'})
export class Profile extends Model<Profile, profileCreationAttrs> {
    @Column({type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true
            })
    id: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER,
             allowNull: false})
    userId: number;

    @Column({type: DataType.STRING,
        unique: true,
        allowNull: false
        })
    login: string;

    @Column({ type: DataType.STRING })
    firstName: string;

    @Column({ type: DataType.STRING })
    secondName: string;

    @Column({ type: DataType.STRING })
    birthDate: string;

    @Column({ type: DataType.STRING })
    phoneNumber: string;

    @Column({ type: DataType.STRING })
    address: string;
}