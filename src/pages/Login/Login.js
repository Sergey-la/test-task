import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../../Components/Button/Button';
import './login.scss';

function Login() {
    const [submitLoaded, setSubmitLoaded] = useState(false);
    const { register, handleSubmit } = useForm();
    const [errorPas, setErrorPas] = useState(false);
    const navigate = useNavigate();
    const reg = /[а-яА-ЯЁё]/;

    const submit = (data) => {
        setSubmitLoaded(true);
        setTimeout(() => {
            if (data.password.length < 8) {
                setErrorPas(true);
                setSubmitLoaded(false);
                return;
            }
            const isValidPas = reg.test(data.password);
            setErrorPas(isValidPas);
            if (isValidPas) {
                setSubmitLoaded(false);
                return;
            }
            localStorage.setItem('auth', true);
            setSubmitLoaded(false);
            return navigate('/');
        }, 500);
    };

    const changeInputValue = ({ target }) => {
        target.value = target.value.replace(/ /g, '');
    };

    return (
        <section className="login">
            <div className="login-form-overlay">
                <form className="login-form" onSubmit={handleSubmit(submit)}>
                    <div className="login-form__wrapper">
                        <h1>Simple Hotel Check</h1>
                        <div className="input" style={{ marginBottom: '24px' }}>
                            <label style={{ fontFamily: 'roboto-light' }}>
                                Логин
                                <input
                                    type="email"
                                    required={true}
                                    {...register('login')}
                                />
                            </label>
                        </div>
                        <div className="input" style={{ marginBottom: '24px' }}>
                            <label
                                style={{
                                    fontFamily: 'roboto-light',
                                    marginBottom: '15px',
                                }}
                            >
                                Пароль
                                <input
                                    type="password"
                                    required={true}
                                    {...register('password')}
                                    onInput={changeInputValue}
                                />
                            </label>
                            {errorPas && (
                                <span style={{ color: '#E55858' }}>
                                    Введите корректный пароль. Пароль не должен
                                    содержать кириллицу и количество символов
                                    должно быть более 8
                                </span>
                            )}
                        </div>
                        <Button text={'Войти'} disable={submitLoaded}></Button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
