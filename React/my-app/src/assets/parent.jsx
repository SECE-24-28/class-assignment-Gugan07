import react from 'react';
function Parent() {
    const [fName, setName] = useSatate("Harry");
    const [gift, setGift] = useState("Watch");
    return (
        <>
            <h1>Welcome to react</h1>
            <h2>hello,{fName}</h2>
            <button>Click Me</button>
            <parent gift={gift}></parent>
        </>
    )