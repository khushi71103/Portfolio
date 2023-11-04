const Links=()=>{
    const items=["Homepage","Services","Portfolio","Contact","About"];
    return (
        <div className="links">
            {items.map((item)=>(
                <a href={"#${item}"} key={item}>
                    {itme}
                </a>
            ))}
        </div>
    
    );
};

export default Links;