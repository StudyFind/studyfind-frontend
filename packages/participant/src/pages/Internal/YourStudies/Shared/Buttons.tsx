import { Flex } from "@chakra-ui/react";
import { ActionButton, Link } from "components/atoms";
import { FaPencilAlt, FaPhone, FaTrashAlt } from "react-icons/fa";

interface Props {
  link: string;
  confirmed: boolean;
  handleEdit: () => void;
  handleDelete: () => void;
}

function Buttons({ link, confirmed, handleEdit, handleDelete }: Props) {
  return (
    <Flex gridGap="4px">
      {link && (
        <Link to={link} isWrapper>
          <ActionButton
            icon={<FaPhone />}
            hint={confirmed ? "Join" : "Pending"}
            colorScheme={confirmed ? "green" : "gray"}
          />
        </Link>
      )}
      {handleEdit && (
        <ActionButton icon={<FaPencilAlt />} hint="Edit" colorScheme="blue" onClick={handleEdit} />
      )}
      {handleDelete && (
        <ActionButton
          icon={<FaTrashAlt />}
          hint="Delete"
          colorScheme="red"
          onClick={handleDelete}
        />
      )}
    </Flex>
  );
}

export default Buttons;
