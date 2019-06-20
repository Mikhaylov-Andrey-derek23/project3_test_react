import React from 'react';

class  FormEmail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userEmail : '',
            message : '',
            email : '',
            alert : 'red'
        }
    }
    componentDidMount(){
        fetch('api/user.json').then(answer=>{
            return answer.json()
        }).then(respon =>{
            this.setState({
                userEmail: respon.email,
            })
        })
    }

    handlerChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handlerSubmit(event){
        event.preventDefault();
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const answer = this.state.email;
        if (re.test(answer)){
            if(answer != this.state.userEmail){
                this.setState({
                    message : "Спасибо за подписку.",
                    alert : 'green'
                })}else{
                    this.setState({
                        message : "Данный email уже есть в базе, введите новый.",
                        alert : 'red'
                    }) 
            }
        }else{
            this.setState({
                message : "Некорректный e-mail. Попробуйте еще раз.",
                alert : 'red'
            })
        }
    }


    render(){
        return(
            <section className="formEmail">
                <h2>будь всегда в курсе выгодных предложений</h2>
                <h3>подписывайся и следи за новинками и выгодными предложениями.</h3>
                <form onSubmit={(event) => this.handlerSubmit(event)}> 
                    <input onChange={(event) => this.handlerChange(event)} type="text" name="email" value={this.state.email} placeholder="email"></input>
                    <button type="submit">Подписаться</button>
                    <p className={this.state.alert}>{this.state.message}</p>
                </form>
                {/* http://172.20.3.191:3000 */}
            </section>
        )
    }
}
export default FormEmail