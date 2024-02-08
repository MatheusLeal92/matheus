import './estilo.css'

export default function LineSVG ({ fillColor }) {
    return (
<svg width="113" height="3" viewBox="0 0 113 3" xmlns="http://www.w3.org/2000/svg">
<line y1="1.5" x2="113" y2="1.5" stroke={fillColor} stroke-width="3"/>
</svg>  ) ;
}