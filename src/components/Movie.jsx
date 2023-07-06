function Movie(props){
    const{
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return(
        <div className="card">
            <img src={poster} className="card-img-top" alt="poster"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{year} <br /> {type} </p>
                <a href="#" className="btn btn-primary"> Watch </a>
        </div>
</div>
    );
}
export {Movie};