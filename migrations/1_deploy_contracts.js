const MembershipToken = artifacts.require("MembershipToken");
const RatingToken = artifacts.require("RatingToken");

module.exports = function (deployer) {
  deployer.deploy(MembershipToken, "NTUFC")
    .then(() => deployer.deploy(RatingToken, "NTUFC", MembershipToken.address));
};
