import buttonStyle from '../../scss/button.module.scss'
import Link from 'next/link';


const Button = ({href, text, type = 'primary', target, external}) => {
    const types = {
        primary: 'is-primary',
        success: 'is-success',
        info: 'is-info',
        danger: 'is-danger',
        warning: 'is-warning',
    }

    const buttonClass = `button ${types[type]}`;
    if(external){
        return (
            <div className={buttonStyle.button}>
                <a className={buttonClass} target={target} href={href}>{text}</a>
            </div>
        )
    }
    return (
        <div className={buttonStyle.button}>   
            <Link href={href}>
                <a className={buttonClass} target={target}>{text}</a>
            </Link>
        </div>
    )
}

export default Button