import { PasscodeView } from '@/features/passcode/components/PasscodeView';
import { usePasscode } from '../hooks/usePasscode';
import { useSettings } from '@/features/settings/hooks/useSettings';

export const PasscodeScreen = () => {
  const passcode = usePasscode()
  const { settings } = useSettings()

  return (
    <PasscodeView
      mode='confirm'
      onSubmit={(code) => {
        if (settings.passcode !== code) {
          return false;
        }


        passcode.setIsAuthenticated(true)
        return true;
      }}
      onClose={() => {
        passcode.setIsAuthenticated(false)
      }}
    />
  );
}
