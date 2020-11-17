import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './styles/Normalize.css';
import './styles/App.css';
import Header from './components/Header';
import CategoryBox from './components/CategoryBox';

function App() {

    let items: string[] = [];

    return (
        <div className="App">
            <Header items={items} />

            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.shutterstock.com%2Fimage-vector%2Fsample-red-square-grunge-stamp-260nw-338250266.jpg&f=1&nofb=1"
                alt=""
                className="img"
            />

            <section className="padding">
                <div className="container">
                    <h3 className="text-center">Categories</h3>
                    <div className="row justify-content-around">
                        <CategoryBox
                            name="Male"
                            desc="Male"
                            img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1VxoVQFXXXXcHXXXXq6xXFXXXt%2FMYDBSH-Brand-Fashion-V-Neck-Men-T-Shirt-Casual-Elastic-Cotton-Male-Slim-Fit-Tshirt-Man.jpg&f=1&nofb=1"
                        />
                        <CategoryBox
                            name="Female"
                            desc="Female"
                            img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1VxoVQFXXXXcHXXXXq6xXFXXXt%2FMYDBSH-Brand-Fashion-V-Neck-Men-T-Shirt-Casual-Elastic-Cotton-Male-Slim-Fit-Tshirt-Man.jpg&f=1&nofb=1"
                        />
                    </div>
                </div>
            </section>

            <footer className="second-color padding">
                <div className="container">
                    <h4 className="text-center">Contac Info</h4>
                    <p>Nixon Lizcano</p>
                    <ul>
                        <ol><a href="https://github.com/Totoratsu" target="blank">Github</a></ol>
                    </ul>
                </div>
            </footer>

        </div>
    );
}

export default App;
