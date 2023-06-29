import React from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

const App = () => {
    const users: IUser[] = [
        {id: 1, name: 'Aida', email: 'a@ma.ru', address: {city: 'Spb', street: 'dubochki', zipcode: '23233'}},
        {id: 2, name: 'Vitaly', email: 'sewe@mail.ru', address: {city: 'Spb', street: 'parnas', zipcode: '232345'}},
    ]
    return (
        <div>
            <Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} width={'200px'} height={'200px'}>
                <button>Нажми меня</button>
            </Card>
            <UserList users={users}/>
        </div>
    );
};

export default App;