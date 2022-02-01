/**
 * @api {get} /public/v1/data/alerts/bot-details Get bot details
 * @apiVersion 1.1.0
 * @apiName GetBotDetails
 * @apiGroup Alerts
 * @apiDescription Get main details for certain bot for sale. Mainly used by Support to get the bot price for the purchasing process.
 * @apiExample Request URL example:
 *  /public/v1/data/alerts/bot-details/5b1501bb3a21b34c6d6e618f
 * @apiSuccessExample {json} Response (example):
 * {
        "alertId": "60858c745987e2032ec4506e",
        "threatId": "608177832fd438329fbbda59",
        "BotURL": "https://genesis.market/client/bots/view?id=3779703234",
        "SourceName": "GenesisMarket",
        "BotID": "3779703234",
        "Price": "74",
   }
 **/
async function add(request, response) {
    const accountId = request.session.Api.AccountId;
    const alertId = Lib.Utils.ObjectId(request.params.AlertID);
    try {
        const botDetails = await ApiRoutes.getBotDetails(alertId);
        response.json(botDetails);
    } catch (error) {
        Logger.error(accountId, 'v1', 'getBotDetails', error.stack);
        response.status(500).end(GeneralError);
    }
}