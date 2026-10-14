import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rolesData = [
  {
    role: "Anonymous public visitor",
    view: "Illustrative education only",
    edit: "No",
    share: "No",
  },
  {
    role: "Authorized researcher",
    view: "Own/entitled object if supported",
    edit: "Only via owning workspace",
    share: "Conditional on governed licensing",
  },
  {
    role: "Authorized team collaborator",
    view: "Only explicitly entitled scope",
    edit: "Only with verified role permissions",
    share: "Not assumed",
  },
  {
    role: "Administrator / support",
    view: "No blanket content entitlement",
    edit: "Only governed administration paths",
    share: "Requires purpose limitation and audit",
  },
  {
    role: "Revoked / expired license",
    view: "Safe limitation notice",
    edit: "No",
    share: "No",
  },
];

export default function RolesAccessSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">ROLES & ACCESS</SectionEyebrow>
          <SectionHeading>
            Who can view, edit or share a saved object.
          </SectionHeading>
          <SectionLede>
            Access follows role and entitlement, never guesswork. Nothing here implies an active collaboration feature until governed and approved.
          </SectionLede>
        </Reveal>

        {/* Roles Table */}
        <Reveal delay={0.15} className="mt-10 overflow-hidden rounded-xl border border-[#5d5a72]/15">
          <div className="overflow-x-auto">
            <div className="min-w-[700px] divide-y divide-[#5d5a72]/15">
              {rolesData.map((item) => (
                <div
                  key={item.role}
                  className="flex items-center px-6 py-4.5 transition-colors duration-150 hover:bg-[#f6f5fb]/50 sm:px-8"
                >
                  {/* Role Name */}
                  <div className="w-[240px] shrink-0 font-bold text-[#171335] text-[13px] sm:text-sm">
                    {item.role}
                  </div>

                  {/* Permissions Columns */}
                  <div className="grid flex-1 grid-cols-3 gap-6">
                    {/* View */}
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold uppercase tracking-[0.5px] text-[#5d5a72]">
                        VIEW
                      </span>
                      <span className="mt-1 text-sm text-[#171335]">
                        {item.view}
                      </span>
                    </div>

                    {/* Edit */}
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold uppercase tracking-[0.5px] text-[#5d5a72]">
                        EDIT
                      </span>
                      <span className="mt-1 text-sm text-[#171335]">
                        {item.edit}
                      </span>
                    </div>

                    {/* Share / Export */}
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold uppercase tracking-[0.5px] text-[#5d5a72]">
                        SHARE / EXPORT
                      </span>
                      <span className="mt-1 text-sm text-[#171335]">
                        {item.share}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
