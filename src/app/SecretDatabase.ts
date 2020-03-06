import Dexie from "dexie";

enum SecretDatabaseKey {
    SECRET = "SECRET"
}

type SecretDatabaseType = {
    id?: number;
    key?: SecretDatabaseKey;
    value: string
}

class SecretDatabase extends Dexie {
    secret: Dexie.Table<SecretDatabaseType,number>;
    private defaultData: SecretDatabaseType = {
        key: SecretDatabaseKey.SECRET,
        value: ""
    };

    constructor() {
        super("SecretDatabase");
        this.version(2).stores({
            secret: "++id,key,value"
        });
    }

    initDefaultData = async () => {
        try {
            const secretData = await this.getSecret();
            if(!secretData){
                await this.secret.add(this.defaultData);
            }
        }catch (e) {
            alert('Some error with database');
        }
    };

    updateSecret = async (value: string) => {
        const updateData: SecretDatabaseType  = {
            key: SecretDatabaseKey.SECRET,
            value
        };
        return await this.secret.update(1, updateData );
    };

    getSecret = async () => {
        return await this.secret.where({key: SecretDatabaseKey.SECRET}).first();
    }
}

export default new SecretDatabase();