import configDev from '../env/dev.config'
import configTest from '../env/test.config'
import configProd from '../env/prod.config'

export const loadEnvConfig = key => {
  const accountInfo = wx.getAccountInfoSync()
  console.log('accountInfo----------->', accountInfo)
  const { envVersion } = accountInfo.miniProgram
  console.log('envVersion----------->', envVersion)
  const configMap = {
    develop: configDev,
    trial: configTest,
    release: configProd,
  }
  return configMap[envVersion][key]
}