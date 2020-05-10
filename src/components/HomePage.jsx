import React,{ Component } from 'react'
import reactComponentImg from '../images/Reactjs-lifecycle-components-1.png'

class HomePage extends Component{


    componentWillMount(){
        console.log("component will mount!!!")
    }
    componentDidMount(){
        console.log("component did mount!!")
    }

    componentWillReceiveProps(newProps){
        console.log("component will receive props!!",newProps)
    }
    shouldComponentUpdate(newProps,newState){
        return true
    }
    componentWillUpdate(nextProps,nextState){
        console.log("component will update!!")
    }
    componentDidUpdate(prevProps,prevState){
        console.log("component did update!")
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    render(){
        return(
            <div className="homePage">
               
                <h4>{this.props.myValue}</h4>
                <img className="loader" src={reactComponentImg} alt="component life cycle"/>
            </div>
        );
    }



    // render(){
    //     return(
    //         <div className="homePage">
    //             <div className ="header">
    //                 <h2>Book International and Domestic Flights</h2>
    //             </div>
    //             <div className="body">

    //             </div>
    //         </div>
    //     )
    // }

}
export default HomePage;