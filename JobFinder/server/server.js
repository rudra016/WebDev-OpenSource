//API Documentation
import swaggerDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
//packages import
import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';

//Security Packages
import helmet from 'helmet';
import xxs from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

//files import
import connectDb from './config/db.js';

//routes import
import testRoutes from './routes/testRouts.js';
import authRoutes from './routes/authRoutes.js'
import errorMiddleware from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js'
import jobsRoutes from './routes/jobsRoutes.js'



// Dot env Config
dotenv.config();

// MongoDB Connection
connectDb();

//Swagger API Config
const options = {
    definition: {
        openapi : "3.0.0",
        info : {
        title : "Job Finder App",
        description : "Node ExpressJs Job Finder Application"
        },
        servers: [
            {
                url : "http://localhost:8080"
            }
        ]
    },
    apis: ['./routes/*.js']
};
const spec = swaggerDoc(options);


// Rest Object
const app = express();

// middleware
app.use(helmet());
app.use(xxs());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors()); //call cors
app.use(morgan('dev')); //call morgan(Showing in console)



// Routes
app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/job', jobsRoutes);

// HomeRoutes (root)
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(spec));



// Validation Middleware
app.use(errorMiddleware);


// port
const port = process.env.PORT || 8080;

// Listen
app.listen(port, () => {
    console.log(`Node Server Running In ${process.env.DEV_MODE} mode on port ${port}`.bgMagenta.white);
});
