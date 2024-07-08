import CardBox from '@/components/utils/CardBox';
import getLang from '@/lang/Lang';
import { Box } from '@material-ui/core';

type DatabaseFirmCardItem = {
  img: string;
  description: string;
};

const DatabaseFirmCardItems: DatabaseFirmCardItem[] = [
  {
    img: `present.svg`,
    description: getLang(`databaseFirm`, `present`),
  },
  {
    img: `search.svg`,
    description: getLang(`databaseFirm`, `search`),
  },
  {
    img: `increase-results.svg`,
    description: getLang(`databaseFirm`, `increaseResults`),
  },
  {
    img: `expand.svg`,
    description: getLang(`databaseFirm`, `expand`),
  },
];

// todo vz theme type
export function DatabaseFirmCardContainer({ theme }: any) {
  return (
    <CardBox p="2.7rem" t={theme} display="block">
      <h2 className="mt-0 text-[2rem] font-[700]">
        {getLang(`databaseFirm`, `whyChooseOurDatabase`)}
      </h2>
      <div className="flex items-center justify-evenly mt-8 ">
        {DatabaseFirmCardItems.map((item: DatabaseFirmCardItem) => (
          <Box
            display="flex"
            maxWidth="250px"
            textAlign="center"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
          >
            <div
              className="w-[200px] h-[200px] rounded-lg flex items-center justify-center"
              style={{
                background: theme ? '#FFF' : '#333',
                boxShadow: '0 0px 10px 4px rgba(0,0,0,0.01)',
              }}
            >
              <img
                src={`/img/databaseFirm/${item.img}`}
                alt={item.description}
              />
            </div>
            <h3 className="min-h-[50px] mt-6 text-[1.2rem] font-[700]">
              {item.description}
            </h3>
          </Box>
        ))}
      </div>
    </CardBox>
  );
}
