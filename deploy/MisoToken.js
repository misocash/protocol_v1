 module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  console.log("deployer: ", deployer)

  await deploy("MisoToken", {
    from: deployer,
    log: true,
    deterministicDeployment: false
  })
}

module.exports.tags = ["MisoToken"]
module.exports.dependencies = ["UniswapV2Factory", "UniswapV2Router02"]
