// need more study

import React from "react";
import StartFirebase from "../firebaseConfig/index";
import { ref, set, get, updata, remove, child } from "firebase/database";

class Crud extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            db: '',
            question: ''
        }
    }

    conponentDidMount() {
        this.setState({
            db: StartFirebase()
        });
    }

}