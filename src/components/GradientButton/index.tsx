import { ButtonProps } from '@mui/material';
import { GradientButton } from './styles'

export default function (props: ButtonProps | any) {
    const { children, ...restProps } = props

    return (
        <GradientButton variant='contained' {...restProps}>
            {children}
        </GradientButton>
    );
}