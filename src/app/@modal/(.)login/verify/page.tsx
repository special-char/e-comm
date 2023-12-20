import OtpVerificationForm from "@/components/auth/verify";
import Modal from "@/components/common/Modal";

type Props = {};

const Varify = (props: Props) => {
	return (
		<Modal>
			<OtpVerificationForm />
		</Modal>
	);
};

export default Varify;
