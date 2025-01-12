module.exports = (fn) => {
    return async (req, res, next) => {
        try {
            // Await the resolved promise to handle asynchronous functions properly
            await Promise.resolve(fn(req, res, next));
        } catch (err) {
            console.error('Error caught by catchAsync:', err);
            return res.status(500).json({
                message: err.message,
                fullError: err
            });
        }
    };
};
