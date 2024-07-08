import * as React from "react"
import { Alert } from "@material-ui/lab"
import { FormStatusType } from "./FormProps"
import getLang from "../../lang/Lang"
import { FormApiResult, JsonApiResult } from "@/data/DataType"

type FormSentStatusProps = {
	status: FormStatusType;
	message?: string;
};

type FormSentStatusResponseProps = {
	result: JsonApiResult;
	defaultMessage?: string;
};

export function isFormResponseValid( props: FormApiResult ) {
	return props?.sent === `ok`
}

export function parseFormResponseStatus( props: FormSentStatusResponseProps ) {
	const errors = props.result?.errors
	if( errors ) {
		// 599 server params error
		if( ( props.result?.code ?? 0 ) < 500 || props.result?.reason === undefined ) {
			// todo vz Sentry !!
			return getLang( `form`, `formSentResponseFail` )
		}
		return props.result.reason
	}
	return props.defaultMessage ?? getLang( `form`, `formSentSuccess` )
}

export function FormSentStatus( props: FormSentStatusProps ) {
	return (
		<Alert severity={ props.status } style={ { marginTop: `20px` } }>
			{ props.message ? props.message : getLang( `form`, `formSentFail` ) }
		</Alert>
	)
}
