import Image from "next/image";
import "./post-card.scss"
import moment from"moment";
import Link from "next/link";

export default function PostCard(props:any){

    let time = moment(props.time).format("MMM DD, YYYY");

    return <div className="post-card">
        <Link href={props.url} title={props.title}>
            <Image className="post-card__cover" title={props.title} alt={props.title} src={props.imageURL} width="100" height="100"/>
        </Link>
        <Link className="post-card__title" href={props.url} title={props.title}>{props.title}</Link>
        <p className="post-card__text">{props.shortText}</p>
        <div className="post-card__time">{time} - <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg> {props.timeToRead} min to read</div>
    </div>
}