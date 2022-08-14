const userAgent = process.env.npm_config_user_agent

const wantedPM = 'pnpm'

function pmFromUserAgent (userAgent) {
	// 信息截取
	const pmSpec = userAgent.split(' ')[0]  
	const separatorPos = pmSpec.lastIndexOf('/')
	
	return {
		name: pmSpec.substr(0, separatorPos),     // 前面的部分
		version: pmSpec.substr(separatorPos + 1)  // 后面的部分
	}
}
const useManagerInfo = pmFromUserAgent(userAgent)

if (useManagerInfo && useManagerInfo.name !== wantedPM) {
  console.log(`current package manager is: ${useManagerInfo.name}/${useManagerInfo.version}. Available package managers is: ${wantedPM}`)
  process.exit(1)
}