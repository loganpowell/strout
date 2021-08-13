export const Avatar = ({ src }) => (
    <div
        className="shadow-dreamy"
        style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            //border: "1px solid grey",
            margin: "2rem",
            overflow: "hidden",
        }}
    >
        <img src={src} />
    </div>
)

export const Card = ({ src, quote, quotee }) => (
    <div
        style={{
            border: "1px solid white",
            borderRadius: "10px",
            padding: "3rem",
            backgroundColor: "white",
            //boxShadow: "inset 0 0 10px grey",
            margin: "4rem 0",
        }}
    >
        <blockquote
            style={{
                fontSize: "2rem",
                fontStyle: "italic",
                lineHeight: "3rem",
            }}
        >
            {quote}
        </blockquote>
        <div
            style={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <Avatar src={src} />
            <p
                style={{
                    fontSize: "4rem",
                }}
            >
                -{quotee}
            </p>
        </div>
    </div>
)
