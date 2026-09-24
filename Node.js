const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.error(`Failed to start server on port ${PORT}:`, err);
        process.exit(1);
    }
    console.log(`✅ Server running on http://localhost:${PORT}`);
});

// Gestion des conflits de ports
process.on('uncaughtException', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please free it or change the PORT.`);
        process.exit(1);
    }
});
