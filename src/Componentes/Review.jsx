export default function Review({rating,comment,date,reviewerName,reviewerEmail})
{
    return(
        <article>
            <span>Rating: {rating}</span>
            <span>Comment: {comment}</span>
            <span>Date: {date}</span>
            <span>ReviewerName: {reviewerName} </span>
            <span>ReviewerEmail: {reviewerEmail} </span>
        </article>
    )
}