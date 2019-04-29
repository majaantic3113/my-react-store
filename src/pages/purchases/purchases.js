import React, { Component } from "react";
import axios from "../../axios-store";
import { connect } from "react-redux";

class Purchase extends Component {
    state = {
        purchases: [],
    };

    componentDidMount() {
        axios.get('purchases', {
            username: this.props.user
        }).then(
            (result) => {
                this.setState({ purchases: result.data.data });
            }
        );
    }

    render() {
        return (
            <div>
                <h3>Your purchases</h3>
                {this.state.purchases.map(item => {
                    return item.purchase.map((product, index) => {
                        return <div key={index}>{product.name}</div>
                    });
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.username,
    };
};


export default connect(mapStateToProps)(Purchase, axios);