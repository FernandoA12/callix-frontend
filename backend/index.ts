import { DebugAdapter } from "./infra/utils/DebugAdapter";
import { LaunchesController } from "./infra/controllers/LaunchesController";
import { HttpServerAdapter } from "./infra/http/HttpServerAdapter";
import { ExpressServer } from "./infra/http/ExpressServer";
import { AxiosConnection } from "./infra/api/AxiosConnection";
import { LaunchesRepositoryAPI } from "./infra/repositories/LaunchesRepositoryAPI";

const logger = new DebugAdapter("server");
const PORT = Number(process.env.PORT) || 3333;

const expressAdapter = new ExpressServer();
const httpServer = new HttpServerAdapter(expressAdapter);

const axiosConnection = new AxiosConnection();
const launchesRepository = new LaunchesRepositoryAPI(axiosConnection);

new LaunchesController(httpServer, launchesRepository);

httpServer.listen(PORT, () => {
  logger.log("🔥 Server listening on port " + PORT);
});
