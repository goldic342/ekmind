import { PasscodeView } from '@/features/passcode/components/PasscodeView';
import { usePasscode } from '../hooks/usePasscode';
import { useAnalytics } from '@/shared/hooks/useAnalytics';
import { useSettings } from '@/features/settings/hooks/useSettings';

export const PasscodeScreen = () => {
  const passcode = usePasscode()
  const { settings } = useSettings()
  const analytics = useAnalytics()

  return (
    <PasscodeView
      mode='confirm'
      onSubmit={(code) => {
        if (settings.passcode !== code) {
          analytics.track('passcode_failed');
          return false;
        }

        analytics.track('passcode_confirmed');

        passcode.setIsAuthenticated(true)
        return true;
      }}
      onClose={() => {
        passcode.setIsAuthenticated(false)
      }}
    />
  );
}
