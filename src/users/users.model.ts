//Модель повторяет поля таблици в БД,
//а также создает зависимости между таблицами в БД.
import { Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript"
import { Profile } from "../profile/profile.model";
import { Text } from "../texts/texts.model";

// интерфейс задает поля DTO для создания класса
interface userCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'user'})
export class User extends Model<User, userCreationAttrs> {
    @Column({type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true
            })
    id: number;

    @Column({type: DataType.STRING,
        unique: true,
        allowNull: false
        })
    email: string;

    @Column({type: DataType.STRING,
        allowNull: false
        })
    password: string;

    @Column({type: DataType.BOOLEAN,
        defaultValue: false
        })
    isAdmin: boolean;

    @HasOne(() => Profile, {
        onDelete: 'CASCADE',
    })
    profile: Profile;

    @HasMany(() => Text)
    texts: Text[];
}