import { useEffect, useState } from "react"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import "./sass/main.scss"

// Components
import { Image, Banner, Header, Loader, Card } from "./components"

const title_style = {
    fontSize: "5rem",
    marginTop: "-5rem",
    marginBottom: "5rem",
    color: "white",
    position: "relative",
    textAlign: "right",
}

const prompts = [
    "Increase value while you #WFH",
    "Improve your curb appeal",
    "Increase energy efficiency",
    "More ft2 at a reduced tax base",
    "More natural light",
    "Retain your open space",
]

const cards = [
    {
        src: "sheri.png",
        quotee: "Sheri Spain Long",
        quote: "[This] team has more vision, imagination and problem solving ability than all five previous architects (combined) with whom we have done projects. their design-build approach simplifies multiple meetings and miscommunications between a separate contractor and architect. The end result of our renovation is stunning.",
    },
    {
        src: "feldman.png",
        quotee: "Sue Feldman",
        quote: "Thank you for doing what another could not do...make our house our home. You listened, you delivered, you communicated, you finished. Hard to find someone like you and your team. If you are looking at this page and trying to figure out if you should hire these guys, PM me.",
    },
    {
        src: "forge.png",
        quotee: "Rich Pennino",
        quote: "...absolutely brilliant in both thought process and creative thinking. They truly have a gift for innovation and thinking outside the box. If I need a architect, designer, or an Einstein then I’m calling these guys.",
    },
]

const linkStyle = {
    textDecoration: "none",
    color: "#5151CE",
}
function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loading
            ? document.querySelector("body").classList.add("loading")
            : document.querySelector("body").classList.remove("loading")
    }, [loading])

    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                {loading ? (
                    <motion.div key="loader">
                        <Loader setLoading={setLoading} />
                    </motion.div>
                ) : (
                    <>
                        <Header />
                        <Banner />
                        {!loading && (
                            <>
                                <div
                                    className="transition-image final"
                                    style={{ position: "relative" }}
                                >
                                    <motion.img
                                        transition={{
                                            ease: [0.6, 0.01, -0.05, 0.9],
                                            duration: 1.6,
                                        }}
                                        src={process.env.PUBLIC_URL + `/images/house1_bf.png`}
                                        layoutId="main-image-1"
                                    />
                                    <h3 style={title_style}>Before</h3>
                                    <Image src={process.env.PUBLIC_URL + "/images/house1_af.png"} />
                                    <h3 style={title_style}>After</h3>
                                    <h2
                                        style={{
                                            fontSize: "5rem",
                                            lineHeight: "6rem",
                                            color: "grey",
                                        }}
                                    >
                                        Benefits of a 2nd Story Addition:
                                    </h2>
                                    <ul
                                        style={{
                                            fontSize: "3rem",
                                            lineHeight: "4rem",
                                            listStyle: "circle",
                                            padding: "2rem",
                                            marginBottom: "4rem",
                                        }}
                                    >
                                        {prompts.map((prompt, idx) => {
                                            const hashed = prompt.includes("#")
                                            const hash = hashed && prompt.split("#")[1]
                                            const replaced_hash = hashed && (
                                                <>
                                                    <span style={{ fontSize: "3rem" }}>
                                                        {prompt.split("#")[0]}
                                                    </span>
                                                    <a
                                                        href={`https://twitter.com/hashtag/${hash}`}
                                                        style={linkStyle}
                                                    >
                                                        {" #"}
                                                        {hash}
                                                    </a>
                                                </>
                                            )
                                            return (
                                                <li
                                                    key={idx}
                                                    style={{
                                                        marginTop: "3rem",
                                                    }}
                                                >
                                                    {(hashed && replaced_hash) || prompt}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div>
                                        {cards.map(({ src, quote, quotee }, idx) => (
                                            <Card
                                                key={idx}
                                                src={process.env.PUBLIC_URL + `/images/${src}`}
                                                quote={quote}
                                                quotee={quotee}
                                            />
                                        ))}
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            //"illu-1": {},
                                        }}
                                    >
                                        <p
                                            className="desc-1"
                                            style={{
                                                fontSize: "4rem",
                                                fontWeight: "bold",
                                                lineHeight: "5rem",
                                                padding: "2rem",
                                                width: "60%",
                                            }}
                                        >
                                            The only provider that delivers a "no move" second story
                                            addition.
                                        </p>
                                        <Image
                                            //className="illu-1"
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/images/grow_up_illustration1.svg"
                                            }
                                        />
                                    </div>
                                    <div
                                        style={{
                                            //width: "100%",
                                            //border: "2px solid white",
                                            backgroundColor: "white",
                                            height: "100px",
                                            borderTopLeftRadius: "10px",
                                            borderTopRightRadius: "10px",
                                            textAlign: "center",
                                            fontSize: "2rem",
                                            margin: "4rem 0",
                                            position: "relative",
                                        }}
                                    >
                                        <a
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                ...linkStyle,
                                            }}
                                            href="mailto:inquiries@anotherstory.com?subject=Referral%20from%20anotherstory"
                                        >
                                            inquiries@anotherstory.com
                                        </a>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    )
}

export default App
