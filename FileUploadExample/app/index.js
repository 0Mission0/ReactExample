import React from 'react';
import ReactDOM from 'react-dom';
import axios, { post } from 'axios';

class SimpleReactFileUpload extends React.Component {
    
    constructor(props) {
        super(props);
        this.state ={
            file: null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    
    onFormSubmit(e){
        e.preventDefault() // Stop form submit
//        this.fileUpload(this.state.file).then((response)=>{
//            console.log(response.data);
//        })
        const url = 'http://172.20.42.90:8080/SC/api/management/uploadSetting';
        const data = new FormData();
        data.append('file',this.state.file);
        const headers=new Headers({
            'access_token': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTEwNjI4NyIsInVzZXIiOiJ7XCJkZWFsZXJDb2RlXCI6XCIzMzAxMDE1XCIsXCJkZWFsZXJOYW1lXCI6XCLlj7DljZfmsLjoj68o5pyN5YuZ5Lit5b-DKVwiLFwicHJvamVjdENoYW5uZWxDb2RlXCI6XCIxMjEwXCIsXCJjaGFubmVsSWRcIjpcIjAwMVwiLFwiY29tcGFueUlkXCI6XCIwMDFcIixcInpvbmVJZFwiOlwi5Y2X5Y2AXCIsXCJkZWFsZXJTdGF0dXNcIjpcIuato-W4uFwiLFwiZGVhbGVyQWRkcmVzc1wiOlwi5Y-w5Y2X5biC5Y2X5Y2A5rC46I-v6Lev5LiA5q61NTHomZ9cIixcImNoYW5uZWxDb2RlXCI6XCJcIixcInBob25lTm9cIjpcIjA5ODYxNzQ0MTVcIixcInNhbGVzQ2xhc3NcIjpcIjAwMVwiLFwidXNlck5hbWVcIjpcIlllaFdhbmfmuKzoqaZcIixcInVzZXJJZFwiOlwiMTUxMDYyODdcIixcInN0YXR1c1wiOjIwMH0iLCJjYXJ0SWQiOiIyMDE4MDIyNi0xMTA2NTM0MTAtMzAwIiwiaXNzIjoiVFNDIiwiaWF0IjoxNTE5NjE0NDEzLCJleHAiOjE1MTk2NDMyMTN9.-Sfrr3cuDK7GonM79EpVspp_W8K0pcSltIpufIsjQqWaqP1qVX_5T2UnF5RrRG9LhHy7f5xgF2drvibZ7bjI6w"
        });
        
        console.log(headers.get('access_token'));
        
        const myOptions = {
            method: 'POST',
            headers:headers,
            body: data
        };
        console.log(myOptions.headers.get('access_token'));
        
        fetch(url, myOptions)
        .then((response) => { console.log(response);return response.json() })
        .then((response) => {
        if (response.invalidToken) {
            localStorage.removeItem('accessToken');
            window.location.reload();
        }
            callback(response);
        })
        .catch((err) => {
            console.warn(`ERROR to call ${url}`, err);
            if (errFunc) errFunc(err);
        });
    }
    
    onChange(e) {
        console.log(e.target.files[0]);
        this.setState({file:e.target.files[0]})
    }
    
    fileUpload(file){
        const url = 'http://172.20.42.90:8080/SC/api/management/uploadSetting';
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            'headers': {
                'access_token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTEwNjI4NyIsInVzZXIiOiJ7XCJkZWFsZXJDb2RlXCI6XCIzMzAxMDE1XCIsXCJkZWFsZXJOYW1lXCI6XCLlj7DljZfmsLjoj68o5pyN5YuZ5Lit5b-DKVwiLFwicHJvamVjdENoYW5uZWxDb2RlXCI6XCIxMjEwXCIsXCJjaGFubmVsSWRcIjpcIjAwMVwiLFwiY29tcGFueUlkXCI6XCIwMDFcIixcInpvbmVJZFwiOlwi5Y2X5Y2AXCIsXCJkZWFsZXJTdGF0dXNcIjpcIuato-W4uFwiLFwiZGVhbGVyQWRkcmVzc1wiOlwi5Y-w5Y2X5biC5Y2X5Y2A5rC46I-v6Lev5LiA5q61NTHomZ9cIixcImNoYW5uZWxDb2RlXCI6XCJcIixcInBob25lTm9cIjpcIjA5ODYxNzQ0MTVcIixcInNhbGVzQ2xhc3NcIjpcIjAwMVwiLFwidXNlck5hbWVcIjpcIlllaFdhbmfmuKzoqaZcIixcInVzZXJJZFwiOlwiMTUxMDYyODdcIixcInN0YXR1c1wiOjIwMH0iLCJjYXJ0SWQiOiIyMDE4MDIyNi0xMTA2NTM0MTAtMzAwIiwiaXNzIjoiVFNDIiwiaWF0IjoxNTE5NjE0NDEzLCJleHAiOjE1MTk2NDMyMTN9.-Sfrr3cuDK7GonM79EpVspp_W8K0pcSltIpufIsjQqWaqP1qVX_5T2UnF5RrRG9LhHy7f5xgF2drvibZ7bjI6weyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTEwNjI4NyIsInVzZXIiOiJ7XCJkZWFsZXJDb2RlXCI6XCIzMzAxMDE1XCIsXCJkZWFsZXJOYW1lXCI6XCLlj7DljZfmsLjoj68o5pyN5YuZ5Lit5b-DKVwiLFwicHJvamVjdENoYW5uZWxDb2RlXCI6XCIxMjEwXCIsXCJjaGFubmVsSWRcIjpcIjAwMVwiLFwiY29tcGFueUlkXCI6XCIwMDFcIixcInpvbmVJZFwiOlwi5Y2X5Y2AXCIsXCJkZWFsZXJTdGF0dXNcIjpcIuato-W4uFwiLFwiZGVhbGVyQWRkcmVzc1wiOlwi5Y-w5Y2X5biC5Y2X5Y2A5rC46I-v6Lev5LiA5q61NTHomZ9cIixcImNoYW5uZWxDb2RlXCI6XCJcIixcInBob25lTm9cIjpcIjA5ODYxNzQ0MTVcIixcInNhbGVzQ2xhc3NcIjpcIjAwMVwiLFwidXNlck5hbWVcIjpcIlllaFdhbmfmuKzoqaZcIixcInVzZXJJZFwiOlwiMTUxMDYyODdcIixcInN0YXR1c1wiOjIwMH0iLCJjYXJ0SWQiOiIyMDE4MDIyNi0xMTA2NTM0MTAtMzAwIiwiaXNzIjoiVFNDIiwiaWF0IjoxNTE5NjE0NDEzLCJleHAiOjE1MTk2NDMyMTN9.-Sfrr3cuDK7GonM79EpVspp_W8K0pcSltIpufIsjQqWaqP1qVX_5T2UnF5RrRG9LhHy7f5xgF2drvibZ7bjI6w',
                'content-type': 'multipart/form-data'
            },
        };
        return post(url, formData, config);
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type='file' onChange={this.onChange} />
                <button type='submit'>Upload</button>
            </form>
        )
    }
}

ReactDOM.render(<SimpleReactFileUpload />, document.getElementById('app'));