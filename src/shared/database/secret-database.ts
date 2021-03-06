import Dexie from "dexie";

enum SecretDatabaseKey {
    SECRET = "SECRET"
}

export type SecretDatabaseType = {
    id?: number;
    key?: SecretDatabaseKey;
    value: string;
}

class SecretDatabase extends Dexie {
    secret: Dexie.Table<SecretDatabaseType, number>;
    private versionStore: number = 2;
    private store = {
        secret: "++id,key,value"
    };
    private defaultData: SecretDatabaseType = {
        key: SecretDatabaseKey.SECRET,
        value: ""
    };

    constructor() {
        super("SecretDatabase");
        this.version(this.versionStore).stores(this.store);
        this.initDefaultData();
    }

    initDefaultData = async () => {
        try {
            const currentData = await this.getSecret();
            if (!currentData) {
                await this.secret.add(this.defaultData);
            }
        } catch (e) {
            alert("Some error with database");
        }
    };

    updateSecret = async (value: string) => {
        const updateData: SecretDatabaseType = {
            key: SecretDatabaseKey.SECRET,
            value
        };
        return await this.secret.update(1, updateData);
    };

    getSecret = async (): Promise<SecretDatabaseType> => {
        return await this.secret
            .where({key: SecretDatabaseKey.SECRET})
            .first();
    };

}

export default new SecretDatabase();