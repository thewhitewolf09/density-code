import AddMoney from '../Screens/AddMoney/AddMoney'
import AddMoneyNavigator from '../Screens/AddMoney/AddMoneyNavigator'
import CardPayment from '../Screens/AddMoney/CardPayment'
import CardInputScreen from '../Screens/AddMoney/CardInputScreen'
import CardInput from '../Screens/AddMoney/components/CardInput'
import NetBankingPayment from '../Screens/AddMoney/NetBankingPayment'
import UPIPayment from '../Screens/AddMoney/UPIPayment'
import CompleteKYC from '../Screens/KYC/CompleteKYC'
import Kycnotverified from '../Screens/KYC/Kycnotverified'
import Login from '../Screens/Login/Login'
import OTP from '../Screens/Login/OTP'
import PhoneNumber from '../Screens/Login/PhoneNumber'
import BuySell from '../Screens/PlayerInfo/BuySell'
import PlayerInfo from '../Screens/PlayerInfo/PlayerInfo'
import ReadyToCreate from '../Screens/PoolGames/ReadyToCreate'
import SelectPlayers from '../Screens/PoolGames/SelectPlayers'
import CapViceCap from '../Screens/PoolGames/CapViceCap'
import UpComingMatchList from '../Screens/PoolGames/UpComingMatchList'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNavigation from './BottomNavigation'
import { React } from 'react'
import ContestListPool from '../Screens/PoolGames/ContestListPool'
import Portfolio from '../Screens/Portfolio/Portfolio'
import ViewAllIplLeaderBoard from '../Screens/Home/ViewAllIplLeaderBoard'
import ViewAllLeaderBoard from '../Screens/Home/ViewAllLeaderBoard'
import TermsAndCondition from '../Screens/Login/TermsAndCondition'
import Privacy from '../Screens/Login/Privacy'
import ParlayUpComingMatchList from '../Screens/ParlayGames/ParlayUpComingMatchList'
import ContestListParlay from '../Screens/ParlayGames/ContestListParlay'
import QuestionPage from '../Screens/ParlayGames/QuestionPage'
// import CarouselCards from '../Screens/OnBoarding/CarouselCard'
import More from '../Screens/More/More'
import ContactUs from '../Screens/More/ContactUs'
import RaiseQuery from '../Screens/More/RaiseQuery'
// import Trialn from '../components/Trialn'
import Moretrial from '../Screens/More/Moretrial'
import Faq from '../Screens/More/Faq'
import SupportMenu from '../Screens/More/SupportMenu'
import PlayerCompareScrollView from '../Screens/Compare/PlayerCompareScrollView'
import ContestDetails from '../components/UI/ContestDetails'
import AllAnswered from '../Screens/ParlayGames/AllAnswered'
import CarouselCards from '../Screens/OnBoarding/CarouselCard'
import PlatformCharges from '../Screens/More/PlatformCharges'
import CampusAmbassador from '../Screens/More/CampusAmbassador'
import Transactions from '../Screens/More/Transactions'
import MyContest from '../Screens/PoolGames/MyContest'
import UserInfo from '../Screens/More/UserInfo'
import MyTeams from '../Screens/PoolGames/MyTeams'
import CryptoBenefits from '../Screens/More/CryptoBenefits'
import Referral from '../Screens/More/Referral'
import Dropdown from '../components/UI/Dropdown'
import Faq2 from '../Screens/More/Faq2'
import Watchlist from '../newScreens/Watchlist'
const Stack = createStackNavigator()

const StackNavigation = () => {
	return (
		<Stack.Navigator
			// initialRouteName="BottomNavigation"
			screenOptions={{
				headerShown: false,
				animationEnabled: false,
			}}
		>
			<Stack.Screen component={CarouselCards} name="OnBoarding" />
			<Stack.Screen component={BottomNavigation} name="BottomNavigation" />
			<Stack.Screen component={Dropdown} name="Dropdown" />
			<Stack.Screen component={Faq2} name="Faq2" />
			<Stack.Screen component={Transactions} name="Transactions" />
			<Stack.Screen component={Watchlist} name="Watchlist" />
			<Stack.Screen component={UserInfo} name="UserInfo" />
			<Stack.Screen component={PhoneNumber} name="PhoneNumber" />
			<Stack.Screen component={PlayerInfo} name="PlayerInfo" />
			<Stack.Screen component={AddMoneyNavigator} name="AddMoneyNavigator" />
			<Stack.Screen component={BuySell} name="BuySell" />
			<Stack.Screen component={OTP} name="OTP" />
			<Stack.Screen component={AddMoney} name="AddMoney" />
			<Stack.Screen component={UPIPayment} name="UPI" />
			<Stack.Screen component={NetBankingPayment} name="NetBanking" />
			<Stack.Screen component={CardPayment} name="Card" />
			<Stack.Screen component={CardInput} name="AddCard" />
			<Stack.Screen component={CardInputScreen} name="CardInputScreen" />
			<Stack.Screen component={UpComingMatchList} name="UpComingMatchList" />
			<Stack.Screen component={ContestListPool} name="ContestListPool" />
			<Stack.Screen component={ReadyToCreate} name="ReadyToCreate" />
			<Stack.Screen component={SelectPlayers} name="SelectPlayers" />
			<Stack.Screen component={CapViceCap} name="ChooseCaptain" />
			<Stack.Screen component={ContestDetails} name="ContestDetails" />
			<Stack.Screen component={Kycnotverified} name="Kycnotverified" />
			<Stack.Screen component={CompleteKYC} name="CompleteKYC" />
			<Stack.Screen component={Portfolio} name="Portfolio" />
			<Stack.Screen
				component={ViewAllIplLeaderBoard}
				name="ViewAllIplLeaderBoard"
			/>
			<Stack.Screen component={ViewAllLeaderBoard} name="ViewAllLeaderBoard" />
			<Stack.Screen component={TermsAndCondition} name="TermsAndCondition" />
			<Stack.Screen component={Privacy} name="Privacy" />
			<Stack.Screen
				component={ParlayUpComingMatchList}
				name="ParlayUpComingMatchList"
			/>
			<Stack.Screen component={ContestListParlay} name="ContestListParlay" />
			<Stack.Screen component={ContestDetails} name="ParlayContestDetails" />
			<Stack.Screen component={QuestionPage} name="QuestionPage" />
			<Stack.Screen component={AllAnswered} name="AllAnswered" />
			<Stack.Screen
				component={PlayerCompareScrollView}
				name="PlayerCompareScrollView"
			/>
			{/* <Stack.Screen component={QuestionPage} name="QuestionPage" /> */}
			{/* <Stack.Screen component={Trialn} name="Trialn" /> */}
			<Stack.Screen component={Moretrial} name="Moretrial" />
			<Stack.Screen component={PlatformCharges} name="PlatformCharges" />
			{/* <Stack.Screen component={Transactions} name="Transactions" /> */}
			<Stack.Screen component={Faq} name="Faq" />
			<Stack.Screen component={SupportMenu} name="SupportMenu" />
			<Stack.Screen component={More} name="More" />
			<Stack.Screen component={ContactUs} name="ContactUs" />
			<Stack.Screen component={RaiseQuery} name="RaiseQuery" />
			<Stack.Screen component={CampusAmbassador} name="CampusAmbassador" />
			<Stack.Screen component={MyContest} name="MyContest" />
			<Stack.Screen component={MyTeams} name="MyTeams" />
		</Stack.Navigator>
	)
}

export default StackNavigation
