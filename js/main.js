var MessageBody = require('./JT808Server_pb');
var JT1078MessageBody = require('./JT1078Server_pb');
var ResMessageBody = require('./JT808TRspServer_pb');
module.exports = {
    DataProto: MessageBody,
    JT1078DataProto: JT1078MessageBody,
    ResDataProto: ResMessageBody
}
