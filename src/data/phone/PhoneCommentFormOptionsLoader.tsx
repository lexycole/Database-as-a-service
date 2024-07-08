import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { JsonApiResult, OptionType } from '../DataType';
import { apiOld } from '../loader/ApiOld';

export function phoneCommentFormOptionsLoader() {
  return apiOld.get<PhoneCommentFormOptionsResult>(
    ApiMethodsOld.phoneCommentFormOptions,
  );
}

export type PhoneCommentFormOptionsResult = {
  callTypeOptions: OptionType[];
} & JsonApiResult;
