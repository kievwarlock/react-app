import * as React from "react";
import {NavLink} from "react-router-dom";
import {Input} from "@/shared/components/form/input.component";
import {useTranslation} from "react-i18next";
import {useQuery, useMutation} from "@apollo/react-hooks";
import {SECRETS_QUERY} from "@/graphql/queries/secretQueries";
import {ADD_SECRET_MUTATION} from "@/graphql/mutations/sectetsMutations";
import {SecretsType, StoreType} from "@/graphql/types";


export const HomePage: React.FC = () => {
    const {t} = useTranslation();
    const {data: secretData} = useQuery<StoreType>(SECRETS_QUERY);

    const [secretName, setSecretName] = React.useState("");
    const [secretPassword, setSecretPassword] = React.useState("");

    const addSecretOnCompleted= () => {
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

            <div>{t("description.part2")}</div>
            <NavLink to="/">To Home page</NavLink>
            <br/>
            <NavLink to="/login">To Login page</NavLink>
            <hr/>

        </div>
    );
};