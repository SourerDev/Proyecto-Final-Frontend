import PropTypes from 'prop-types'
import { GoogleLogin } from '@react-oauth/google'
import { ApiPropYou } from '../../services'
import { useDispatch } from 'react-redux'
import { addAuthorizationWithToken } from '../../services'
import { actionsUser } from '../../redux2.0/reducers'
import { useNavigate } from 'react-router-dom'
import { actionsApp } from '../../redux2.0/reducers'

export function GoogleSignin({ navigateTo = '/' }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleGoogleLogin({ credential }) {
    dispatch(actionsApp.setIsLoading(true))
    ApiPropYou.googleSignin({ credential }).then(({ data }) => {
      const { user, token } = data
      dispatch(actionsUser.setUser(user))
      addAuthorizationWithToken(token)
      dispatch(actionsApp.setIsLoading(false))
      navigate(navigateTo)
    })
  }
  return (
    <GoogleLogin
      useOneTap={true}
      onSuccess={handleGoogleLogin}
      onError={handleGoogleLogin}
    />
  )
}

GoogleSignin.propTypes = {
  navigateTo: PropTypes.string.isRequired,
}
