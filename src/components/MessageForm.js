import BottomBar from '../styled-components/Bar';
import { BiSend } from 'react-icons/bi';
import { Button } from '../styled-components/Button';
import { FormMessage } from '../styled-components/FormMessage';
import { Input } from '../styled-components/Input';
import { InsertIcon } from '../styled-components/Icon';

export default function MessageForm() {
  return (
    <BottomBar bottom>
      <FormMessage>
        <Button type="button" icon>
          <InsertIcon />
        </Button>
        <Input />
        <Button icon send>
          <BiSend />
        </Button>
      </FormMessage>
    </BottomBar>
  );
}
