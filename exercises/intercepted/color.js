module.exports = () => {
    let colorArr = ['blue', 'yellow', 'red'];
    return (req, res, next) => {
        req.color = colorArr[Math.floor(Math.random() * colorArr.length)];
        next();
    }
}




