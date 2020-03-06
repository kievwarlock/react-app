import * as React from "react";
import {NavLink} from "react-router-dom";
import {Input} from "@/shared/components/form/input.component";
import {useTranslation} from "react-i18next";
import {useQuery, useMutation} from "@apollo/react-hooks";
import {SECRETS_QUERY} from "@/graphql/queries/secretQueries";
import {ADD_SECRET_MUTATION} from "@/graphql/mutations/sectetsMutations";
import {SecretsType, StoreType} from "@/graphql/types";
import {DbContext} from "@/app/DbContext";


export const HomePage: React.FC = () => {
    const {t} = useTranslation();
    const {data: secretData} = useQuery<StoreType>(SECRETS_QUERY);
    const db = React.useContext(DbContext);

    const updateDb = async () => {

        const getSecret = await db.getSecret();
        console.log("getSecret:", getSecret);
       /* await db.updateSecret("new val");
        const getSecret2 = await db.getSecret();
        console.log("getSecret2:", getSecret2);*/
        /*db.secret.add({data: "Josephine"}).then(()=>{
            return db.secret.where("data").equals("Josephine").toArray();
        }).then(youngFriends => {
            alert ("My young friends: " + JSON.stringify(youngFriends));
        }).catch(e => {
            alert("error: " + e.stack || e);
        });*/
    };
    // db.transaction("rw", db.secret, async() => {
    //     const id = await db.secret.put({ data: "value test" });
    //     //const id = await db.secret.add({data: "Josephine"});
    //     console.log(id);
    //     //alert (`Added secret with id ${id}`);
    //     // Make sure we have something in DB:
    //    /* if ((await db.secret.where("name").equals("Josephine").count()) === 0) {
    //         const id = await db.friends.add({name: "Josephine", age: 21});
    //         alert (`Addded friend with id ${id}`);
    //     }*/
    //
    //     // Query:
    //     //const youngFriends = await db.friends.where("age").below(25).toArray();
    //
    //     // Show result:
    //     //alert ("My young friends: " + JSON.stringify(youngFriends));
    //
    // }).catch(e => {
    //     alert(e.stack || e);
    // });


    const [secretName, setSecretName] = React.useState("");
    const [secretPassword, setSecretPassword] = React.useState("");

    const addSecretOnCompleted = () => {
        setSecretName("");
        setSecretPassword("");
    };

    const [addSecret] = useMutation<SecretsType>(ADD_SECRET_MUTATION, {
        variables: {
            name: secretName,
            password: secretPassword
        },
        onCompleted: addSecretOnCompleted
    });


    return (
        <div className="home-page">
            <div>
                <h3>Secrets list:</h3>
                {secretData.secrets &&
                secretData.secrets.map((secretItem) => (
                    <div key={secretItem.id}>
                        <p>ID:{secretItem.id}</p>
                        <p>Name:{secretItem.name}</p>
                        <p>Pass:{secretItem.password}</p>
                    </div>
                ))
                }
            </div>
            <div>
                <h3>Add secret:</h3>
                <div>
                    <label>Enter name:</label>
                    <Input
                        value={secretName}
                        onChange={setSecretName}
                        placeholder="Enter name"
                    />
                </div>
                <div>
                    <label>Enter password:</label>
                    <Input
                        value={secretPassword}
                        onChange={setSecretPassword}
                        placeholder="Enter password"
                    />
                </div>
                <button onClick={() => addSecret()}>ADD secret</button>
            </div>
            <hr/>
            <br/>
            <div onClick={updateDb}>getSecret</div>
            <div>{t("description.part2")}</div>
            <NavLink to="/">To Home page</NavLink>
            <br/>
            <NavLink to="/login">To Login page</NavLink>
            <hr/>

        </div>
    );
};