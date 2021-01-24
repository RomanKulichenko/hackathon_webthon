import React from 'react';


function BasicTextFields({setText}) {

    return (
        <div className={'search-block'}>
            <input
                type="search"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Шо шукаємо?"
                onChange={(e) => setText(e.target.value)}
            />
            <button className={'btn btn-primary'}>Знайти</button>
        </div>
    );
}

export default BasicTextFields;
