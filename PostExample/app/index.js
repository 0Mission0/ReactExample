import React from 'react';
import ReactDOM from 'react-dom';

class PostComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    
    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        const url = '/SC/api/package/packageTypes';
        const headers=new Headers({
            'access_token': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTEwNjI4NyIsInVzZXIiOiJ7XCJkZWFsZXJDb2RlXCI6XCIzMzAxMDE1XCIsXCJkZWFsZXJOYW1lXCI6XCLlj7DljZfmsLjoj68o5pyN5YuZ5Lit5b-DKVwiLFwicHJvamVjdENoYW5uZWxDb2RlXCI6XCIxMjEwXCIsXCJjaGFubmVsSWRcIjpcIjAwMVwiLFwiY29tcGFueUlkXCI6XCIwMDFcIixcInpvbmVJZFwiOlwi5Y2X5Y2AXCIsXCJkZWFsZXJTdGF0dXNcIjpcIuato-W4uFwiLFwiZGVhbGVyQWRkcmVzc1wiOlwi5Y-w5Y2X5biC5Y2X5Y2A5rC46I-v6Lev5LiA5q61NTHomZ9cIixcImNoYW5uZWxDb2RlXCI6XCJcIixcInBob25lTm9cIjpcIjA5ODYxNzQ0MTVcIixcInNhbGVzQ2xhc3NcIjpcIjAwMVwiLFwidXNlck5hbWVcIjpcIlllaFdhbmfmuKzoqaZcIixcInVzZXJJZFwiOlwiMTUxMDYyODdcIixcInN0YXR1c1wiOjIwMH0iLCJjYXJ0SWQiOiIyMDE4MDIyNi0xMTA2NTM0MTAtMzAwIiwiaXNzIjoiVFNDIiwiaWF0IjoxNTE5NjE0NDEzLCJleHAiOjE1MTk2NDMyMTN9.-Sfrr3cuDK7GonM79EpVspp_W8K0pcSltIpufIsjQqWaqP1qVX_5T2UnF5RrRG9LhHy7f5xgF2drvibZ7bjI6w"
        });
        
        const myOptions = {
            method: 'GET',
            headers:headers
        };
        
        fetch(url, myOptions).then(
            (response) => {
                console.log(response);
                return response.json();
            }
        ).then(
            (response) => {
                if (response.invalidToken) {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                }
                callback(response);
            }
        ).catch(
            (err) => {
                console.warn(`ERROR to call ${url}`, err);
                if (errFunc) errFunc(err);
            }
        );
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <button type='submit'>Start</button>
            </form>
        )
    }
}

ReactDOM.render(<PostComponent />, document.getElementById('app'));